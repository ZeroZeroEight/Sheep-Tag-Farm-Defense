

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";


//===========================================================================
// Trigger: Zombie Stream
//===========================================================================
const Trig_Zombie_Stream_Func001002002001 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) === FourCC( "n004" ) );

};


const Trig_Zombie_Stream_Func001002002002 = (): boolean => {

	return ( IsUnitPausedBJ( GetFilterUnit() ) === false );

};


const Trig_Zombie_Stream_Func001002002 = (): boolean => {

	return GetBooleanAnd( ( GetUnitTypeId( GetFilterUnit() ) === FourCC( "n004" ) ), ( IsUnitPausedBJ( GetFilterUnit() ) === false ) );

};


const Trig_Zombie_Stream_Func002Func001Func004Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( GetItemName( GetEnumItem() ), false ), 1, 1 ) === SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Zombie_Stream_Func002Func001Func004A = (): void => {


	if ( ( Trig_Zombie_Stream_Func002Func001Func004Func001C() ) ) {

		UnitAddItemByIdSwapped( GetItemTypeId( GetEnumItem() ), GetLastCreatedUnit() )
		SetItemUserData( GetLastCreatedItem(), 1 )

	} else {

	null

	}


};


const Trig_Zombie_Stream_Func002C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) < 28 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Zombie_Stream_Actions = (): void => {

	udg_TempGroup = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Zombie_Stream_Func001002002 ) );

	if ( ( Trig_Zombie_Stream_Func002C() ) ) {

		bj_forLoopAIndex = CountUnitsInGroup( udg_TempGroup );
		bj_forLoopAIndexEnd = 27;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			udg_TempPoint = GetRectCenter( gg_rct_Fence_Zone );
			CreateNUnitsAtLoc( 1, FourCC( "n004" ), Player( 8 ), udg_TempPoint, bj_UNIT_FACING )
			RemoveLocation( udg_TempPoint )
			EnumItemsInRectBJ( gg_rct_Round_5, Trig_Zombie_Stream_Func002Func001Func004A )
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}



	} else {

	null

	}

	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Zombie_Stream = (): void => {

	gg_trg_Zombie_Stream = CreateTrigger();
	DisableTrigger( gg_trg_Zombie_Stream )
	TriggerRegisterTimerEventPeriodic( gg_trg_Zombie_Stream, 3 )
	TriggerAddAction( gg_trg_Zombie_Stream, Trig_Zombie_Stream_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Zombie_Stream();

} );
