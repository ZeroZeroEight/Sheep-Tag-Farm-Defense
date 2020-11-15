
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: FC Plus GUI
//
// sets the farm count and custom value of the farm to enable "destroy last farm" to work properly
//===========================================================================
const Trig_FC_Plus_GUI_Func001Func004002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === true );

};


const Trig_FC_Plus_GUI_Func001Func005002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) === FourCC( "h003" ) );

};


const Trig_FC_Plus_GUI_Func001Func008002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) === FourCC( "h007" ) );

};


const Trig_FC_Plus_GUI_Func001Func011Func007C = (): boolean => {


	if ( ( ! ( udg_TempReal2 > 240 ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func011Func016Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetTriggerUnit() ) === udg_TempPlayer ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func011Func016Func007C = (): boolean => {


	if ( ( ( GetLocationX( udg_TempPoint2 ) !== GetLocationX( udg_TempPoint3 ) ) ) ) {

		return true;

	}


	if ( ( ( GetLocationY( udg_TempPoint2 ) !== GetLocationY( udg_TempPoint3 ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_FC_Plus_GUI_Func001Func011Func016C = (): boolean => {


	if ( ( ! Trig_FC_Plus_GUI_Func001Func011Func016Func007C() ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func011A = (): void => {

	udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
	udg_TempReal = AngleBetweenPoints( udg_TempPoint, udg_TempPoint2 );
	udg_TempPoint3 = OffsetLocation( udg_TempPoint2, ( 64 * I2R( R2I( ( CosBJ( udg_TempReal ) * 1.9 ) ) ) ), ( 64 * I2R( R2I( ( SinBJ( udg_TempReal ) * 1.9 ) ) ) ) );
	RemoveLocation( udg_TempPoint2 )
	udg_TempReal = GetUnitStateSwap( UNIT_STATE_MANA, GetEnumUnit() );
	udg_TempReal2 = GetUnitStateSwap( UNIT_STATE_LIFE, GetEnumUnit() );

	if ( ( Trig_FC_Plus_GUI_Func001Func011Func007C() ) ) {

		udg_TempReal2 = 240;

	} else {

	null

	}

	udg_TempPlayer = GetOwningPlayer( GetEnumUnit() );
	udg_TempUnitType = GetUnitTypeId( GetEnumUnit() );
	udg_TempInt2 = 0;
	RemoveUnit( GetEnumUnit() )
	CreateNUnitsAtLoc( 1, udg_TempUnitType, udg_TempPlayer, udg_TempPoint3, bj_UNIT_FACING )
	SetUnitManaBJ( GetLastCreatedUnit(), udg_TempReal )
	SetUnitLifeBJ( GetLastCreatedUnit(), udg_TempReal2 )
	udg_TempPoint2 = GetUnitLoc( GetLastCreatedUnit() );

	if ( ( Trig_FC_Plus_GUI_Func001Func011Func016C() ) ) {

		RemoveUnit( GetLastCreatedUnit() )
		AddSpecialEffectLocBJ( udg_TempPoint, "Objects\\Spawnmodels\\Human\\HCancelDeath\\HCancelDeath.mdl" )
		DestroyEffectBJ( GetLastCreatedEffectBJ() )

	} else {


		if ( ( Trig_FC_Plus_GUI_Func001Func011Func016Func001C() ) ) {

			udg_TempInt = GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) );
			udg_FarmCount[ udg_TempInt ] = ( udg_FarmCount[ udg_TempInt ] + 1 );
			SaveUnitHandleBJ( GetLastCreatedUnit(), udg_FarmCount[ udg_TempInt ], udg_TempInt, udg_XHashtable )

		} else {

		null

		}

		AddSpecialEffectLocBJ( udg_TempPoint3, "Abilities\\Spells\\Human\\ThunderClap\\ThunderClapCaster.mdl" )
		DestroyEffectBJ( GetLastCreatedEffectBJ() )

	}

	RemoveLocation( udg_TempPoint2 )
	RemoveLocation( udg_TempPoint3 )

};


const Trig_FC_Plus_GUI_Func001Func017Func001Func006002003001 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === false );

};


const Trig_FC_Plus_GUI_Func001Func017Func001Func006002003002 = (): boolean => {

	return ( GetFilterUnit() !== udg_TempUnit );

};


const Trig_FC_Plus_GUI_Func001Func017Func001Func006002003 = (): boolean => {

	return GetBooleanAnd( ( IsUnitType( GetFilterUnit(), UNIT_TYPE_STRUCTURE ) === false ), ( GetFilterUnit() !== udg_TempUnit ) );

};


const Trig_FC_Plus_GUI_Func001Func017Func001Func007C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func017Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "h00M" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func017Func002C = (): boolean => {


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "n00B" ) ) ) ) {

		return true;

	}


	if ( ( ( GetUnitTypeId( GetTriggerUnit() ) === FourCC( "n00C" ) ) ) ) {

		return true;

	}

	return false;

};


const Trig_FC_Plus_GUI_Func001Func017Func005Func001Func011C = (): boolean => {


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint3, PATHING_TYPE_WALKABILITY ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func017Func005Func001Func014C = (): boolean => {


	if ( ( ! ( IsTerrainPathableBJ( udg_TempPoint3, PATHING_TYPE_WALKABILITY ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func017Func005Func001C = (): boolean => {


	if ( ( ! ( UnitHasBuffBJ( GetEnumUnit(), FourCC( "B005" ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001Func017Func005A = (): void => {


	if ( ( Trig_FC_Plus_GUI_Func001Func017Func005Func001C() ) ) {

		udg_TempUnit = GetEnumUnit();
		udg_TempPoint2 = GetUnitLoc( udg_TempUnit );
		udg_TempPoint3 = PolarProjectionBJ( udg_TempPoint, 85, AngleBetweenPoints( udg_TempPoint2, udg_TempPoint ) );
		SetUnitX( udg_TempUnit, GetLocationX( udg_TempPoint3 ) )
		SetUnitY( udg_TempUnit, GetLocationY( udg_TempPoint3 ) )
		AddSpecialEffectLocBJ( udg_TempPoint2, "Abilities\\Spells\\Orc\\FeralSpirit\\feralspirittarget.mdl" )
		DestroyEffectBJ( GetLastCreatedEffectBJ() )
		AddSpecialEffectLocBJ( udg_TempPoint3, "Abilities\\Spells\\Orc\\FeralSpirit\\feralspirittarget.mdl" )
		DestroyEffectBJ( GetLastCreatedEffectBJ() )

		if ( ( Trig_FC_Plus_GUI_Func001Func017Func005Func001Func011C() ) ) {

			SetUnitPositionLoc( udg_TempUnit, udg_TempPoint3 )

		} else {

		null

		}

		RemoveLocation( udg_TempPoint3 )
		udg_TempPoint3 = GetUnitLoc( udg_TempUnit );

		if ( ( Trig_FC_Plus_GUI_Func001Func017Func005Func001Func014C() ) ) {

			SetUnitPositionLoc( udg_TempUnit, udg_TempPoint2 )

		} else {

		null

		}

		RemoveLocation( udg_TempPoint3 )
		RemoveLocation( udg_TempPoint2 )
		udg_TempPoint = GetRectCenter( gg_rct_Dummy );
		CreateNUnitsAtLoc( 1, FourCC( "h009" ), Player( bj_PLAYER_NEUTRAL_EXTRA ), udg_TempPoint, bj_UNIT_FACING )
		UnitApplyTimedLifeBJ( 0.3, FourCC( "BTLF" ), GetLastCreatedUnit() )
		UnitAddAbilityBJ( FourCC( "A015" ), GetLastCreatedUnit() )
		SetUnitAbilityLevelSwapped( FourCC( "A015" ), GetLastCreatedUnit(), udg_Upgrades[ ( GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) + 8 ) ] )
		RemoveLocation( udg_TempPoint )
		IssueTargetOrderBJ( GetLastCreatedUnit(), "rejuvination", udg_TempUnit )

	} else {

	null

	}


};


const Trig_FC_Plus_GUI_Func001Func017C = (): boolean => {


	if ( ( ! Trig_FC_Plus_GUI_Func001Func017Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Func001C = (): boolean => {


	if ( ( ! ( GetUnitTypeId( GetTriggerUnit() ) !== FourCC( "h00L" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_FC_Plus_GUI_Actions = (): void => {


	if ( ( Trig_FC_Plus_GUI_Func001C() ) ) {

		udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = ( udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] + 1 );
		SaveUnitHandleBJ( GetTriggerUnit(), GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ), udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ], udg_XHashtable )
		GroupAddUnitSimple( GetTriggerUnit(), udg_CancelGroup )

		if ( ( Trig_FC_Plus_GUI_Func001Func017C() ) ) {

			udg_TempPoint = GetUnitLoc( GetTriggerUnit() );
			udg_TempGroup = GetUnitsOfPlayerAndTypeId( GetOwningPlayer( GetTriggerUnit() ), FourCC( "u000" ) );
			ForGroupBJ( udg_TempGroup, Trig_FC_Plus_GUI_Func001Func017Func005A )
			DestroyGroup( udg_TempGroup )
			RemoveLocation( udg_TempPoint )

		} else {


			if ( ( Trig_FC_Plus_GUI_Func001Func017Func001C() ) ) {

				udg_TempPoint = GetUnitLoc( GetTriggerUnit() );
				udg_TempGroup = GetUnitsOfPlayerAndTypeId( GetOwningPlayer( GetTriggerUnit() ), FourCC( "u000" ) );
				udg_TempUnit = GroupPickRandomUnit( udg_TempGroup );
				udg_TempPoint3 = GetUnitLoc( udg_TempUnit );
				DestroyGroup( udg_TempGroup )
				udg_TempGroup = GetUnitsInRangeOfLocMatching( 196, udg_TempPoint, Condition( Trig_FC_Plus_GUI_Func001Func017Func001Func006002003 ) );

				if ( ( Trig_FC_Plus_GUI_Func001Func017Func001Func007C() ) ) {

					udg_TempUnit2 = GroupPickRandomUnit( udg_TempGroup );
					udg_TempPoint2 = GetUnitLoc( udg_TempUnit2 );
					AddSpecialEffectLocBJ( udg_TempPoint2, "Abilities\\Spells\\Items\\AIil\\AIilTarget.mdl" )
					DestroyEffectBJ( GetLastCreatedEffectBJ() )
					AddSpecialEffectLocBJ( udg_TempPoint3, "Abilities\\Spells\\Items\\AIil\\AIilTarget.mdl" )
					DestroyEffectBJ( GetLastCreatedEffectBJ() )
					SetUnitX( udg_TempUnit, GetLocationX( udg_TempPoint2 ) )
					SetUnitY( udg_TempUnit, GetLocationY( udg_TempPoint2 ) )
					SetUnitPositionLoc( udg_TempUnit2, udg_TempPoint3 )
					RemoveLocation( udg_TempPoint2 )

				} else {

				null

				}

				DestroyGroup( udg_TempGroup )
				RemoveLocation( udg_TempPoint3 )
				RemoveLocation( udg_TempPoint )

			} else {

			null

			}


		}


	} else {

		RemoveUnit( GetTriggerUnit() )
		udg_TempPoint = GetUnitLoc( GetTriggerUnit() );
		udg_TempGroup = GetUnitsInRangeOfLocMatching( 120, udg_TempPoint, Condition( Trig_FC_Plus_GUI_Func001Func004002003 ) );
		udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 192, udg_TempPoint, Condition( Trig_FC_Plus_GUI_Func001Func005002003 ) );
		GroupAddGroup( udg_TempGroup2, udg_TempGroup )
		DestroyGroup( udg_TempGroup2 )
		udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 160, udg_TempPoint, Condition( Trig_FC_Plus_GUI_Func001Func008002003 ) );
		GroupAddGroup( udg_TempGroup2, udg_TempGroup )
		DestroyGroup( udg_TempGroup2 )
		ForGroupBJ( udg_TempGroup, Trig_FC_Plus_GUI_Func001Func011A )
		DestroyGroup( udg_TempGroup )
		RemoveLocation( udg_TempPoint )

	}


};


//===========================================================================
const InitTrig_FC_Plus_GUI = (): void => {

	gg_trg_FC_Plus_GUI = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_FC_Plus_GUI, EVENT_PLAYER_UNIT_CONSTRUCT_START )
	TriggerAddAction( gg_trg_FC_Plus_GUI, Trig_FC_Plus_GUI_Actions )

};



addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_FC_Plus_GUI();

} );
