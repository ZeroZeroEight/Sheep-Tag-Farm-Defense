

import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Thrust Rockets
//===========================================================================
const Trig_Thrust_Rockets_Func001Func001Func009C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001Func001Func024C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001Func002Func001Func009C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001Func002Func001Func024C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001Func002Func002Func009C = (): boolean => {


	if ( ( ! ( udg_Jump[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001Func002Func002Func024C = (): boolean => {


	if ( ( ! ( udg_Lightning[ udg_Index ] === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001Func002C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I01F" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Func001C = (): boolean => {


	if ( ( ! ( UnitHasItemOfTypeBJ( GetEnumUnit(), FourCC( "I01E" ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Thrust_Rockets_Actions = (): void => {


	if ( ( Trig_Thrust_Rockets_Func001C() ) ) {

		bj_forLoopAIndex = 1;
		bj_forLoopAIndexEnd = 12;

		while ( true ) {

			if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
			TriggerExecute( gg_trg_Reset )
			udg_StartPoint[ udg_Index ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
			udg_Angle[ udg_Index ] = I2R( ( GetForLoopIndexA() * 30 ) );
			CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
			UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
			udg_Missile[ udg_Index ] = GetLastCreatedUnit();
			udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
			udg_Jump[ udg_Index ] = false;

			if ( ( Trig_Thrust_Rockets_Func001Func001Func009C() ) ) {

				UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

			} else {

			null

			}

			udg_Teleportation[ udg_Index ] = 0;
			udg_Distance[ udg_Index ] = 700;
			udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
			udg_DamageMethod[ udg_Index ] = 1;
			udg_ExplodeRadius[ udg_Index ] = 120;
			udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl";
			udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
			udg_CollisionRadius[ udg_Index ] = 80;
			udg_Damage[ udg_Index ] = 1000;
			udg_Targets[ udg_Index ] = 1;
			udg_TargetsAdvanced[ udg_Index ] = 0;
			udg_Drag[ udg_Index ] = false;
			udg_Link[ udg_Index ] = false;
			udg_Lightning[ udg_Index ] = false;

			if ( ( Trig_Thrust_Rockets_Func001Func001Func024C() ) ) {

				AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
				udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

			} else {

			null

			}

			udg_Speed[ udg_Index ] = 900;
			udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
			udg_VerticalArc[ udg_Index ] = 0;
			udg_HorizontalArc[ udg_Index ] = 0;
			udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
			AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
			udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
			udg_MissileSize[ udg_Index ] = 100;
			SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
			SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
			udg_TerrainReaction[ udg_Index ] = 0;
			udg_TreeReaction[ udg_Index ] = 0;
			udg_BoundaryReaction[ udg_Index ] = 2;
			udg_BuildingReaction[ udg_Index ] = 0;
			bj_forLoopAIndex = bj_forLoopAIndex + 1;

		}



	} else {


		if ( ( Trig_Thrust_Rockets_Func001Func002C() ) ) {

			bj_forLoopAIndex = 1;
			bj_forLoopAIndexEnd = 9;

			while ( true ) {

				if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
				TriggerExecute( gg_trg_Reset )
				udg_StartPoint[ udg_Index ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
				udg_Angle[ udg_Index ] = I2R( ( GetForLoopIndexA() * 40 ) );
				CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
				udg_Missile[ udg_Index ] = GetLastCreatedUnit();
				udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
				udg_Jump[ udg_Index ] = false;

				if ( ( Trig_Thrust_Rockets_Func001Func002Func002Func009C() ) ) {

					UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

				} else {

				null

				}

				udg_Teleportation[ udg_Index ] = 0;
				udg_Distance[ udg_Index ] = 700;
				udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
				udg_DamageMethod[ udg_Index ] = 1;
				udg_ExplodeRadius[ udg_Index ] = 120;
				udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl";
				udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
				udg_CollisionRadius[ udg_Index ] = 80;
				udg_Damage[ udg_Index ] = 1000;
				udg_Targets[ udg_Index ] = 1;
				udg_TargetsAdvanced[ udg_Index ] = 0;
				udg_Drag[ udg_Index ] = false;
				udg_Link[ udg_Index ] = false;
				udg_Lightning[ udg_Index ] = false;

				if ( ( Trig_Thrust_Rockets_Func001Func002Func002Func024C() ) ) {

					AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
					udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

				} else {

				null

				}

				udg_Speed[ udg_Index ] = 900;
				udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
				udg_VerticalArc[ udg_Index ] = 0;
				udg_HorizontalArc[ udg_Index ] = 0;
				udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
				udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
				udg_MissileSize[ udg_Index ] = 100;
				SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
				SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
				udg_TerrainReaction[ udg_Index ] = 0;
				udg_TreeReaction[ udg_Index ] = 0;
				udg_BoundaryReaction[ udg_Index ] = 2;
				udg_BuildingReaction[ udg_Index ] = 0;
				bj_forLoopAIndex = bj_forLoopAIndex + 1;

			}



		} else {

			bj_forLoopAIndex = 1;
			bj_forLoopAIndexEnd = 7;

			while ( true ) {

				if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
				TriggerExecute( gg_trg_Reset )
				udg_StartPoint[ udg_Index ] = GetUnitLoc( udg_Missile[ udg_LoopIndex ] );
				udg_Angle[ udg_Index ] = ( I2R( GetForLoopIndexA() ) * 51.43 );
				CreateNUnitsAtLoc( 1, FourCC( "h008" ), Player( PLAYER_NEUTRAL_AGGRESSIVE ), udg_StartPoint[ udg_Index ], udg_Angle[ udg_Index ] )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetLastCreatedUnit() )
				udg_Missile[ udg_Index ] = GetLastCreatedUnit();
				udg_DamageSource[ udg_Index ] = udg_DamageSource[ udg_LoopIndex ];
				udg_Jump[ udg_Index ] = false;

				if ( ( Trig_Thrust_Rockets_Func001Func002Func001Func009C() ) ) {

					UnitAddAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetTriggerUnit() )

				} else {

				null

				}

				udg_Teleportation[ udg_Index ] = 0;
				udg_Distance[ udg_Index ] = 700;
				udg_AttackType[ udg_Index ] = ATTACK_TYPE_CHAOS;
				udg_DamageMethod[ udg_Index ] = 1;
				udg_ExplodeRadius[ udg_Index ] = 120;
				udg_DamageSpecialEffect[ udg_Index ] = "Abilities\\Weapons\\SteamTank\\SteamTankImpact.mdl";
				udg_DamageSpecialEffectLocation[ udg_LoopIndex ] = "origin";
				udg_CollisionRadius[ udg_Index ] = 80;
				udg_Damage[ udg_Index ] = 1000;
				udg_Targets[ udg_Index ] = 1;
				udg_TargetsAdvanced[ udg_Index ] = 0;
				udg_Drag[ udg_Index ] = false;
				udg_Link[ udg_Index ] = false;
				udg_Lightning[ udg_Index ] = false;

				if ( ( Trig_Thrust_Rockets_Func001Func002Func001Func024C() ) ) {

					AddLightningLoc( "CLPB", udg_StartPoint[ udg_Index ], udg_StartPoint[ udg_Index ] )
					udg_LightningEffect[ udg_Index ] = GetLastCreatedLightningBJ();

				} else {

				null

				}

				udg_Speed[ udg_Index ] = 900;
				udg_Speed[ udg_Index ] = ( udg_Speed[ udg_Index ] * 0.03 );
				udg_VerticalArc[ udg_Index ] = 0;
				udg_HorizontalArc[ udg_Index ] = 0;
				udg_MissileEffectString[ udg_Index ] = "Abilities\\Weapons\\CannonTowerMissile\\CannonTowerMissile.mdl";
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), udg_MissileEffectString[ udg_Index ] )
				udg_MissileEffect[ udg_Index ] = GetLastCreatedEffectBJ();
				udg_MissileSize[ udg_Index ] = 100;
				SetUnitScalePercent( GetLastCreatedUnit(), udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ], udg_MissileSize[ udg_Index ] )
				SetUnitVertexColorBJ( GetLastCreatedUnit(), 100, 100, 100, 0 )
				udg_TerrainReaction[ udg_Index ] = 0;
				udg_TreeReaction[ udg_Index ] = 0;
				udg_BoundaryReaction[ udg_Index ] = 2;
				udg_BuildingReaction[ udg_Index ] = 0;
				bj_forLoopAIndex = bj_forLoopAIndex + 1;

			}



		}


	}


};


//===========================================================================
const InitTrig_Thrust_Rockets = (): void => {

	gg_trg_Thrust_Rockets = CreateTrigger();
	TriggerAddAction( gg_trg_Thrust_Rockets, Trig_Thrust_Rockets_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Thrust_Rockets();
} );
