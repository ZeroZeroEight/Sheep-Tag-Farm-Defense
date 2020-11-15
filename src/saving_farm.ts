

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Saving Farm
//===========================================================================
const Trig_Saving_Farm_Conditions = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "h002" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Saving_Farm_Func001C = (): boolean => {


	if ( ( ! ( udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] < GetPlayerState( GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_CAP ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Saving_Farm_Actions = (): void => {


	if ( ( Trig_Saving_Farm_Func001C() ) ) {

		udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = ( udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] + 1 );
		SetPlayerStateBJ( GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_FOOD_USED, udg_Income[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] )
		CreateTextTagUnitBJ( "TRIGSTR_654", GetTriggerUnit(), 0, 9.8, 100, 100, 100, 0 )
		SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
		SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
		SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
		SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
		udg_TempPoint = GetUnitLoc( GetTriggerUnit() );
		AddSpecialEffectLocBJ( udg_TempPoint, "Abilities\\Spells\\Human\\HolyBolt\\HolyBoltSpecialArt.mdl" )
		DestroyEffectBJ( GetLastCreatedEffectBJ() )
		RemoveLocation( udg_TempPoint )

	} else {

		CreateTextTagUnitBJ( "TRIGSTR_655", GetTriggerUnit(), 0, 9.8, 100, 100, 100, 0 )
		SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
		SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
		SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
		SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
		AdjustPlayerStateBJ( 35, GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_GOLD )

	}

	RemoveUnit( GetTriggerUnit() )

};


//===========================================================================
const InitTrig_Saving_Farm = (): void => {

	gg_trg_Saving_Farm = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Saving_Farm, EVENT_PLAYER_UNIT_CONSTRUCT_FINISH )
	TriggerAddCondition( gg_trg_Saving_Farm, Condition( Trig_Saving_Farm_Conditions ) )
	TriggerAddAction( gg_trg_Saving_Farm, Trig_Saving_Farm_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Saving_Farm();
} );
